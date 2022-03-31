import { useEffect } from "react";

let sectionObserver;
export default function useObserverHook(ele, callback, watch = []) {
  useEffect(() => {
    sectionObserver = new IntersectionObserver(entries => {
      callback && callback(entries);
    });
    const element = document.querySelector("#loading");
    sectionObserver.observe(element);

    // ↓ 在离开页面的时候触发
    return () => {
      if (sectionObserver) {
        sectionObserver.unobserve(element);
        sectionObserver.disconnect();
      }
    }
  }, watch);
}