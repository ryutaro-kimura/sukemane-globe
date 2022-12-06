# sukemane-globe

### チーム名：少年大志

## 起動方法
```
yarn
yarn start
```

## コミットルール
参考：https://qiita.com/konatsu_p/items/dfe199ebe3a7d2010b3e
- プレフィックスをつける(今回は以下)
  - add,update,delete,fix
- issue番号を書く
  ```
  #2 feat:　〇〇を追加
  ```
- なるべく「理由」と「動詞」を書く
  ```
  #3 feat: 〇〇なため、△△を追加
  ```
  
## ブランチ
- main
  - 本番環境
- develop
  - 開発環境
  - ブランチはここから生やす
- issue#番号
  - 実装する issue 番号をつける
  - 完了したらdevelopにPull Requestを出してマージする

## VSCodeに入れて欲しい拡張機能
- prettier
- material icon
- ES7+ React/Redux/React-Native snippets
