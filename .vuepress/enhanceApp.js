import locale from './locale';

const t = (key) => {
  const keyArr = key.split('.');
  let textObj = locale;
  keyArr.forEach((subkey) => {
    if (textObj[subkey]) {
      textObj = textObj[subkey];
    }
  });

  // return typeof textObj === 'string'?textObj:key;
  return typeof textObj === 'string' ? textObj : keyArr[keyArr.length - 1];
};

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  // options, // 附加到根实例的一些选项
  // router, // 当前应用的路由实例
  // siteData, // 站点元数据
}) => {
  Vue.prototype.t = t;

  // console.log({
  //   Vue, options, router, siteData,
  // });
};
