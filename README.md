# カレー飲食店の通販サイト

> eCommerce プラットフォーム （MongoDB、Express、React、Node、を使用したウェブアプリ)

https://curryshopapp.herokuapp.com/　にてデプロイされています。
使用された写真はすべて、サンプル画像です。
ロゴは自主製作のものです。

## 機能

- 商品カート
- レビューとレーティング
- 評価の高い商品をカルーセルを用いて表示
- 商品をページ表示
- 商品検索
- プロフィールページ
- 注文ページ
- Admin用の製品追加・編集機能
- Admin用のユーザー一覧（パスワード以外の情報を表示）
- Admin用の注文一覧
- Admin用の発送済みボタン
- チェックアウト機能
- PayPalでの支払い
- データベース上での情報管理（MongoDB)

## 今後追加されるアップデート（７月を目途）
- ナビゲーションバーのデザイン変更
- ロゴの視認性の向上
- 検索ボックスのリアルタイム結果
- Stripe導入
- ホーム画面の製品表示をページネーションから無限スクロールに変更
- Auth0導入
- カルーセルの表示を改善する。
- スパイスレベルを変更できるような注文システム
- トッピングのおすすめ表示

## 開発方法

### １．ES Modules in Node（バックエンド）

バックエンドではECMAScript Modulesを使用しています. 
Nodeはv14.6+以上をインストールしてください。
ファイルをインポートする場合は、.jsの拡張子を加えてください。

### ２．Envファイル
.envファイルをルートにて作成してください

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```

### ３．Dependenciesのインストール (フロントエンド & バックエンド)

```
npm install
cd frontend
npm install
```

### ４．ラン

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

### ５．ビルド & デプロイ

```
# Create frontend prod build
cd frontend
npm run build
```

HerokuのProcfileがありますので、それを利用してデプロイしてください。
