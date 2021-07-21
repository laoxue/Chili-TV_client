export const changeMsg = ({commit}) => {
  commit({
    type: 'mutationsMsg',     //对应mutation.js中的mutationsMsg方法
    msg: '我是修改后的数据~~~'
  });
};