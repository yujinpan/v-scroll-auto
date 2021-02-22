import { DirectiveOptions } from 'vue';

/**
 * AutoScroll 自动滚动指令
 * @example
 * // default: speed = 1, target = current, axis = y
 * <ul v-auto-scroll v-auto-scroll:1.x>
 *   <li>1</li>
 *   <li>2</li>
 *   <li>3</li>
 * </ul>
 */
const AutoScroll: DirectiveOptions = {
  inserted(el, { value, modifiers, arg }) {
    const target = value ? el.querySelector(value) : el;
    if (target.children.length > 1) {
      target.style.overflow = 'hidden';
      const { x } = modifiers;
      const speed = typeof arg === 'string' ? +arg : 1;
      let ownTranslate = (distance: number) =>
        translateChildren(target, 0, -distance);
      if (x) {
        ownTranslate = (distance) => translateChildren(target, -distance, 0);
      }
      const each = (index = 1, surplus = 0) => {
        ownTranslate(0);
        const {
          vertical: initVertical,
          horizontal: initHorizontal
        } = getDistance(target, target.children[0]);
        const { vertical, horizontal } = getDistance(
          target,
          target.children[1] as HTMLElement
        );
        let distance = vertical;
        let start = initVertical;
        if (x) {
          distance = horizontal;
          start = initHorizontal;
        }
        if (index === 0) {
          start = 0;
        }
        if (surplus) {
          start += surplus;
        }
        if (distance) {
          let scrollRef = (target.__auto_scroll__ = scroll(
            distance,
            ownTranslate,
            (surplus) => {
              // 取消启动与停止事件
              target.removeEventListener('mouseenter', scrollRef.stop);
              target.removeEventListener('mouseleave', scrollRef.start);
              // @ts-ignore
              scrollRef = null;

              const firstChild = target.firstChild as HTMLElement;
              firstChild.remove();
              target.append(firstChild);
              each(1, surplus);
            },
            start,
            speed
          ));
          // 绑定启动与停止事件
          target.addEventListener('mouseenter', scrollRef.stop);
          target.addEventListener('mouseleave', scrollRef.start);
        }
      };
      // 先初始化好位置，后面每一个元素都从边沿开始滚动
      requestAnimationFrame(() => each(0));
    }
  },
  unbind(el, { value, modifiers, arg }) {
    const target = value ? el.querySelector(value) : el;
    if (target && target.__auto_scroll__) {
      const scrollRef = target.__auto_scroll__;
      scrollRef.stop();
      // 取消启动与停止事件
      target.removeEventListener('mouseenter', scrollRef.stop);
      target.removeEventListener('mouseleave', scrollRef.start);
      delete target.__auto_scroll__;
    }
  }
};

export default AutoScroll;

function scroll(
  distance: number,
  next: (p: number) => void,
  complete: (p: number) => void,
  start: number = 0,
  interval = 1
) {
  let moved = start;
  let animate: number;
  const fn = () => {
    animate = 0;
    next(moved);
    if (moved >= distance) {
      complete(moved - distance);
    } else {
      moved += interval;
      animate = requestAnimationFrame(fn);
    }
  };
  fn();
  return {
    stop: () => {
      cancelAnimationFrame(animate);
      animate = 0;
    },
    start: () => {
      if (animate === 0) {
        animate = requestAnimationFrame(fn);
      }
    }
  };
}

function translateChildren(target: HTMLElement, x: number, y: number) {
  const transform = `translate(${x}px, ${y}px)`;
  Array.from(target.children).forEach(
    (item) => ((item as HTMLElement).style.transform = transform)
  );
}

function getDistance(
  elem: HTMLElement,
  elem2: HTMLElement
): { vertical: number; horizontal: number } {
  const { top, left } = elem.getBoundingClientRect();
  const { top: top2, left: left2 } = elem2.getBoundingClientRect();
  return {
    vertical: Math.abs(top - top2),
    horizontal: Math.abs(left - left2)
  };
}
