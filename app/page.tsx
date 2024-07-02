import MailForm from "../components/MailForm/MailForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <h2 className="font-semibold text-3xl mb-4">お問い合わせフォーム</h2>
      <MailForm />
    </main>
  );
}
