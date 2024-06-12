import React from 'react';

async function createCharge(amount: number, source: string, description: string) {
  const response = await fetch('/api/20240612/stripe/route', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ amount, source, description }),
  });
  return response.json();
}

export default async function DashboardPage() {
  const handlePayment = async () => {
    const amount = 5000; // 5000円
    const source = 'tok_visa'; // 仮のトークン
    const description = 'サンプル課金処理';

    try {
      const charge = await createCharge(amount, source, description);
      alert('課金成功: ' + JSON.stringify(charge));
    } catch (error) {
      console.error('課金エラー:', error);
      alert('課金エラー: ' + (error as Error).message);
    }
  };

  return (
    <div>
      <h1>ダッシュボード</h1>
      <button onClick={handlePayment}>5000円で課金する</button>
    </div>
  );
}
