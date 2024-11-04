// Skor API URL'si (örnek bir API kullanılıyor)
const apiUrl = 'https://api.example.com/match/besiktas';

// Verileri almak için fonksiyon
async function fetchMatchData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        updateMatchInfo(data);
    } catch (error) {
        console.error('Maç verileri alınırken bir hata oluştu:', error);
    }
}

// Maç bilgilerini güncelleme fonksiyonu
function updateMatchInfo(data) {
    document.getElementById('match-title').textContent = data.matchTitle || 'Beşiktaş Maçı';
    document.getElementById('match-score').textContent = `Skor: ${data.score.homeTeam} - ${data.score.awayTeam}`;
    document.getElementById('match-minute').textContent = `Dakika: ${data.minute}`;
    document.getElementById('goal-scorers').textContent = `Gol Atanlar: ${data.goals.join(', ') || '-'}`;
    document.getElementById('cards').textContent = `Kartlar: ${data.cards.join(', ') || '-'}`;
}

// Verileri her 30 saniyede bir güncelle
setInterval(fetchMatchData, 30000);

// Sayfa yüklendiğinde ilk veriyi al
document.addEventListener('DOMContentLoaded', fetchMatchData);
