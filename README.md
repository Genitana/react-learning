## 安装typescript工程
```
yarn create react-app my-app --template typescript
```

对一个已有的cra工程添加typescript
```
yarn add typescript @types/node @types/react @types/react-dom @types/jest
```

## react-scripts 版本修改
把package.json里的react-scripts版本改为"4.0.3"，然后再`yarn`
- "react-scripts": "5.0.0" 安装的是 webpack5
- "react-scripts": "4.0.3" 安装的是 webpack4 （这里还是先用4吧）