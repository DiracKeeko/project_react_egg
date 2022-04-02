import { useEffect } from "react";
import { isEmpty } from "lodash";

/**
 * 1，监听图片是否进入可视区域；
 * 2，将src属性的值替换为真实的图片地址，占位图片地址为data-src
 * 3，停止监听当前的节点
 * @param {*} ele 
 * @param {*} callback 
 * @param {*} watch 
 */

let sectionObserver;
export default function (ele, callback, watch = []) {
  useEffect(() => {
    const nodes = document.querySelectorAll(ele);
    if (!isEmpty(nodes)) {
      sectionObserver = new IntersectionObserver(entries => {
        callback && callback(entries);
        entries.forEach(item => {
          // console.log(item);
          if (item.isIntersecting) {
            const dataSrc = item.target.getAttribute('data-src');
            item.target.setAttribute("src", dataSrc);
            sectionObserver.unobserve(item.target);
          }
        })
      });
      nodes.forEach(item => {
        sectionObserver.observe(item);
      })
    }
    return () => {
      if (!isEmpty(nodes) && sectionObserver) {
        sectionObserver.disconnect();
      }
    }
  }, watch);
}