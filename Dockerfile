# 使用官方 Node.js 鏡像作為基础鏡像
FROM node:18.0.0

# 設置工作目錄
WORKDIR /app

# 將 package.json 和 package-lock.json 拷貝到工作目錄
COPY package*.json ./

# 安裝依賴
RUN npm install

# 將應用程式代碼拷貝到工作目錄
COPY . .

# 編譯 Nuxt.js 應用程式
RUN npm run build

# 將預設的監聽端口設置為 3000
EXPOSE 3000

# 啟動 Nuxt.js 應用程式
CMD ["npm", "start"]
