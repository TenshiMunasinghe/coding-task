import 'modern-normalize/modern-normalize.css';
import './globals.css';

export const metadata = {
  title: 'フロントエンド コーディング課題',
  description: 'ユーザー登録機能のデモです。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ja'>
      <body>{children}</body>
    </html>
  );
}
