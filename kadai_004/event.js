// HTMLドキュメントが読み込み完了したときに
$(window).on('load', () => {
    // コメントをコンソールに出力
    console.log('loadイベントが発生しました');
});

// 画面をクスロールしたときに
$(window).on('scroll', () => {
    // コメントをコンソールに出力
    console.log('sclollイベントが発生しました');
});