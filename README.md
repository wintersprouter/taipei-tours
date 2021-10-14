# 趣台北
<p align="center">
   <img src="https://raw.githubusercontent.com/wintersprouter/taipei-tours/master/src/image/%E8%B6%A3%E5%8F%B0%E5%8C%97.png"/>
</p>

趣台北是一個使用 Vue 打造的台北旅遊景點網站，串接[台北旅遊網API](https://www.travel.taipei/open-api/swagger/ui/index#/)，使用者可以在網頁上瀏覽台北各景點、依據類別查詢，使用者亦可把景點加入/移除我的最愛，並在我的最愛中編輯景點內容。

 ## Outline-目錄
- [Live Demo - 專案Demo](#Live-Demo-專案Demo)
- [Features - 實作功能](#Features-實作功能)
- [Installing - 專案安裝流程](#Installing-專案安裝流程)

 ## Live Demo-專案Demo
 [趣台北](https://wintersprouter.github.io/taipei-tours/#/home)
 
 ## Features-實作功能
- 使用 Vue 框架打造 SPA 網站
- 使用 SCSS 切版
- RWD 響應式設計
- 使用 vue-router 管理路由
- 實作下拉式選單實現資料篩選功能
- 使用 Axios 串接 [台北旅遊網API](https://www.travel.taipei/open-api/swagger/ui/index#/) 取得景點資料
- 實作分頁功能
- 使用 Localstoarge 儲存使用者我的最愛景點，將資料保存 client 端
- 實作表單驗證功能

## Installing-專案安裝流程
1. 請在終端機輸入
```
$ git clone https://github.com/wintersprouter/taipei-tours.git
$ cd taipei-tours
```
2. 
```
$ npm install
```
3. 

```
npm run serve
```
4. 將可在終端機上看到以下訊息
```
> App running at:
  - Local:   http://localhost:8080/
  - Network: http://<Your Virtual IP>:8080/
```

