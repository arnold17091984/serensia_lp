---
name: まーしー式AI-LP-33-ターコイズ不動産土地活用フォト
description: ターコイズ不動産土地活用フォト（白×ターコイズ×ネイビー×ゴールド）の人物なしLPを生成する、まーしー式AI LPのNo33デザインSKILL。住宅系／ビジネス系／地域サービス向け。ユーザーが「33番」「ターコイズ不動産土地活用フォトで」「teal-realestate-land-photoで」と指定した時に使い、原稿をこのデザイン文法でLP化する。
---

# まーしー式AI-LP-33-ターコイズ不動産土地活用フォト

## 用途

住宅系／ビジネス系／地域サービス

## 使い方の前提

- ユーザーが渡した原稿・商品情報・メモをLP化する。
- 参考デザインから使うのは配色、余白、文字設計、情報の順序、CTA形状、モチーフの方向性だけにする。
- サンプル文言、商品名、価格、日程、数値、ロゴ、会社名は流用しない。
- 人物、顔、人体、人物写真、人物イラスト、手のアップを生成しない。
- 人物の代わりに商品、道具、建築、植物、UI、図解、素材感を主役にする。
- 原稿が会話内だけにある場合は `content.json` または `content.md` に整理してから `--content` で渡す。

## デザイン指定

- テーマID: `teal-realestate-land-photo`
- 配色: 白×ターコイズ×ネイビー×ゴールド
- 雰囲気: 不動産・土地活用・相談感・人物写真・信頼感
- カテゴリ: 住宅系／ビジネス系／地域サービス
- 主役モチーフ: 参考LPの写真、図形、UI、商品モチーフ
- レイアウト: 参考LPの余白、見出し、カード、CTA構成を踏襲する
- 文字: 可読性の高い日本語書体
- 装飾だけで差別化せず、主役モチーフと情報構造の両方でこのテーマらしさを出す。
- セクション高さは内容量に合わせて可変にし、CTAは周囲に十分な余白を取る。

## 生成コマンド

8セクションのテスト生成:

```bash
node '/Users/mai_macbookpro/.codex/skills/まーしー式AI-LP-GPTImage2/scripts/generate-marcy-lp-gpt-image-2.js' --content "/absolute/path/to/content.json" --test8 --theme teal-realestate-land-photo --quality medium
```

19セクション完全版:

```bash
node '/Users/mai_macbookpro/.codex/skills/まーしー式AI-LP-GPTImage2/scripts/generate-marcy-lp-gpt-image-2.js' --content "/absolute/path/to/content.json" --theme teal-realestate-land-photo --quality medium
```

## 確認

- 全画像が1080px幅で、`LP_full_vertical.jpeg` が生成されていること。
- サンプル固有情報が混入していないこと。
- 人物や人体が描かれていないこと。
- 配色だけでなく、モチーフとレイアウトも指定どおりであること。
- `content_snapshot.json` が保存されていること。


## 同梱サンプル画像の分離ルール

このSKILLでは、背景デザインとボタン素材を別セクションとして扱う。

### 背景セクション

- `assets/background_sample.png` と `assets/lp_01_hero_background.png` は背景・本文レイアウト確認用。
- ここにはクリック可能ボタン本体、CTAボタン文字、ボタン形状を混ぜない。
- UTAGEでボタンを置く場所は、背景内に自然な余白として確保する。

### ボタンセクション

- `assets/button_sample.png` と `assets/lp_01_hero_button.png` はボタン単体のPNG素材。
- ボタン素材は背景や本文画像と分け、UTAGEで画像リンクとして設定できる前提で扱う。
- LP生成時もCTAは背景に焼き込まず、必要に応じて `lp_01_button.png` のような透過PNGとして独立出力する。


## HTMLクリック対応LP分割出力ルール

現在のLPを1枚の長い画像だけとして出力しない。LPの見た目はAI画像で高品質に保ちつつ、CTAボタン部分だけを実際にクリックできるHTML要素として配置できるように、画像ファイルと構造JSONを必ずセットで出力する。

### 目的

- LPのビジュアル品質はAI画像で維持する。
- CTAボタンは画像に焼き込まず、HTML/CSSでクリック可能な要素として配置できるようにする。
- フォーム、決済フォーム、入力欄は画像に重ねず、独立したHTMLセクションとして扱う。
- 最終的に分割画像とJSONから、最大幅750px想定のスマホLPをHTML/CSSで再構成できる状態にする。

### 変更仕様

1. LP画像を1枚の長い画像として出力しない。
2. CTAボタンがある箇所で画像を分割する。
3. CTAボタン部分は「CTA背景画像」と「HTMLボタン要素」を分けて出力する。
4. ボタンの文字、リンク先、サイズ、配置情報を構造データとして出力する。
5. フォーム系セクションは画像化せず、独立したHTMLセクションとして扱う。

### セクション出力イメージ

- Section 01: 画像セクション
  - ファーストビュー画像など、通常のLP画像として出力する。

- Section 02: CTAセクション
  - CTA背景画像だけを出力する。
  - ボタン画像やボタン文字は背景に含めない。
  - ボタンはHTML要素として別で配置する。
  - ボタンの位置、サイズ、テキスト、リンク先をJSONで出力する。

- Section 03: 画像セクション
  - 実績、ベネフィット、説明などの通常画像として出力する。

- Section 04: CTAセクション
  - CTA背景画像とHTMLボタンを分ける。

- Section 05: フォームセクション
  - フォームは画像化しない。
  - 高さは `auto` として扱う。
  - フォームの高さに応じて、下の画像セクションを自動で押し下げる。

### CTAセクションJSON例

```json
{
  "section_type": "cta",
  "background_image": "cta_bg_01.png",
  "button": {
    "text": "今すぐLINE登録する",
    "href": "https://example.com",
    "position": {
      "x": "50%",
      "y": "68%",
      "anchor": "center"
    },
    "size": {
      "width": "78%",
      "height": "64px"
    },
    "style": {
      "border_radius": "999px",
      "font_size": "22px",
      "font_weight": "700"
    }
  }
}
```

### 重要ルール

- CTA背景画像には、ボタン本体を描画しない。
- CTA背景画像には、ボタン文字、矢印、クリックを示すボタン装飾を入れない。
- ボタンを置く場所には、十分な余白を作る。
- ボタン位置はpxではなく `%` で管理する。
- スマホ表示を前提に、最大幅750pxで崩れない設計にする。
- フォーム、決済フォーム、入力欄は画像に重ねない。
- フォーム系セクションは `height: auto` で扱う。
- CTA以外の部分は通常の画像セクションとして出力してよい。
- 画像ファイルと構造JSONを必ずセットで出力する。

### 最終アウトプット

必ず以下を出力する。

1. 分割された画像ファイル
2. CTA背景画像
3. HTMLボタン配置用JSON
4. LP全体のsection構造JSON
5. そのJSONをもとにHTML/CSSへ変換するコード

### 推奨ファイル名

- `sections/section_01_image.png`
- `sections/cta_bg_01.png`
- `sections/section_03_image.png`
- `sections/cta_bg_02.png`
- `sections/lp_sections.json`
- `sections/cta_buttons.json`
- `html/index.html`
- `html/style.css`

### LP全体section構造JSON例

```json
{
  "max_width": "750px",
  "sections": [
    {
      "section_type": "image",
      "image": "section_01_image.png",
      "alt": "ファーストビュー"
    },
    {
      "section_type": "cta",
      "background_image": "cta_bg_01.png",
      "button": {
        "text": "今すぐLINE登録する",
        "href": "https://example.com",
        "position": { "x": "50%", "y": "68%", "anchor": "center" },
        "size": { "width": "78%", "height": "64px" },
        "style": { "border_radius": "999px", "font_size": "22px", "font_weight": "700" }
      }
    },
    {
      "section_type": "form",
      "form_id": "main_form",
      "height": "auto"
    }
  ]
}
```

### HTML/CSS変換コードの要件

- `lp_sections.json` を読み込む、または同等の構造データをJS内に持つ。
- `image` セクションは `img` として縦に配置する。
- `cta` セクションは背景画像を `img` または `background-image` として表示し、その上に `button` または `a` 要素を絶対配置する。
- `form` セクションは通常のHTMLフォームとして配置し、画像に重ねない。
- LP全体のラッパーは `max-width: 750px; width: 100%; margin: 0 auto;` を基本にする。
- CTAボタンの `left/top/width/height` はJSONの `%` 指定を反映する。
- フォームの高さは固定せず、内容に応じて下のセクションが自然に押し下がるようにする。

## UTAGE用ボタン分離出力ルール

UTAGEでは画像の上に自由配置でボタンを重ねる運用が難しいため、CTAボタン部分は必ず分割して出力する。

### 必須出力

CTAが入る箇所は、以下の4点を必ず出力する。

- `lp_01_before_button.png`: ボタンより上の画像
- `lp_01_button_area_background.png`: ボタンを置くための背景のみ画像
- `lp_01_button.png`: クリック可能にする透過PNGボタン
- `lp_01_after_button.png`: ボタンより下の画像

最終CTAを作る場合も同じ考え方で、必要に応じて以下を出力する。

- `lp_19_before_button.png`
- `lp_19_button_area_background.png`
- `lp_19_button.png`
- `lp_19_after_button.png`

### ボタンエリア背景の作り方

`button_area_background` は、単独で別生成した背景にしない。単独生成にすると、上画像・下画像との間に線や境目が出やすい。

必ず次のルールで作る。

- 上画像の下端から自然につながる背景にする。
- 下画像の上端へ自然につながる背景にする。
- ボタンを置く中央部分は十分な余白を確保する。
- ボタンの影や光がなじむような薄い受け皿、光、余白だけを入れる。
- ボタンそのもの、ボタン文字、クリックを想定したボタン形状は描かない。
- 強い水平線、濃い帯、区切り線、背景色の急変を入れない。
- 可能であれば、上画像の下端と下画像の上端から背景を合成・補間して作り、別生成背景をそのまま使わない。

### ボタンPNGの作り方

- `button` は、透過PNG想定の独立したボタン素材として必ず生成する。
- `button` には背景、LP本文、装飾カード、写真枠を含めない。
- `button` の文言は原稿にあるCTA文言だけを使う。
- ボタン周囲には透明余白を残し、UTAGEで画像リンクとして設定しやすくする。

### UTAGEでの配置順

UTAGEでは以下の順番で縦に配置する。

1. `lp_01_before_button.png`
2. `lp_01_button_area_background.png` を背景として置く
3. その上、または画像リンクとして `lp_01_button.png` を置く
4. `lp_01_after_button.png`

背景の上に直接ボタンを重ねられない場合は、`button_area_background` と `button` を重ねた確認用画像を作り、見た目の接続を確認してから実装する。

### 従来形式との関係

通常の `LP_full_vertical.jpeg` はプレビュー用として出力してよい。ただし、UTAGE実装用には上記の分割ファイルを必ず同梱する。

詳しいサンプルは `sample_separate_background_button.md` を参照する。
