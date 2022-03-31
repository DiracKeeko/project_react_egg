import { useEffect } from "react";

let sectionObserver;
export default function useObserverHook(ele, callback, watch = []) {
  useEffect(() => {
    const element = document.querySelector(ele);
    if (element) {
      sectionObserver = new IntersectionObserver(entries => {
        callback && callback(entries);
      });
      sectionObserver.observe(element);
    }

    // ↓ 在离开页面的时候触发
    return () => {
      if (sectionObserver && element) {
        sectionObserver.unobserve(element);
        sectionObserver.disconnect();
      }
    }
  }, watch);
}