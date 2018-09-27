# 拖拽

## 相关 cursor
- 调整基准线
    - 水平 col-resize
    - 垂直 rol-resize
- 调整宽高
    - 水平 ew-resize
    - 垂直 ns-resize
    - 左上右下 se-resize
    - 左下右上 nesw-resize ne-resize
- 移动 move

## event
| 被拖元素 | 目标元素 |
|---|---|
| dragstart | |
| | dragenter |
| | dragover |
| | drop |
| | dragleave |
| dragend | |

只有当dropover被preventDefault之后，drop才会触发，否则释放会触发dragleave。

## 参考
- [HTML5 drag & drop 拖拽与拖放简介](https://www.zhangxinxu.com/wordpress/2011/02/html5-drag-drop-%E6%8B%96%E6%8B%BD%E4%B8%8E%E6%8B%96%E6%94%BE%E7%AE%80%E4%BB%8B/)
