/**
 * シンプルなJavaScriptファイル
 * 作成日: 2025年5月9日
 * 作成者: 歌舞伎
 */

// DOMが読み込まれた時に実行
document.addEventListener('DOMContentLoaded', function() {
    console.log('ページが読み込まれました');
    
    // 現在の日時を取得
    const now = new Date();
    const dateStr = `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日`;
    const timeStr = `${now.getHours()}時${now.getMinutes()}分`;
    
    // 日付を表示する要素を追加
    const container = document.querySelector('.container');
    if (container) {
        const dateElement = document.createElement('div');
        dateElement.style.marginTop = '20px';
        dateElement.style.padding = '10px';
        dateElement.style.backgroundColor = '#f0f8ff';
        dateElement.style.borderRadius = '5px';
        dateElement.style.textAlign = 'center';
        
        dateElement.innerHTML = `
            <p>現在の日時: ${dateStr} ${timeStr}</p>
            <p>このページをご覧いただきありがとうございます！</p>
        `;
        
        container.appendChild(dateElement);
    }

    // ボタンがあれば、クリックイベントを追加
    const button = document.createElement('button');
    button.textContent = 'クリックしてください';
    button.style.display = 'block';
    button.style.margin = '20px auto';
    button.style.padding = '10px 20px';
    button.style.backgroundColor = '#3498db';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    
    button.addEventListener('click', function() {
        alert('こんにちは！GitHubプロジェクトへようこそ！');
    });
    
    if (container) {
        container.appendChild(button);
    }
});
