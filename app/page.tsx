import MailForm from "../components/MailForm/MailForm";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen mx-auto max-w-sm md:max-w-xl">
      <h2 className="font-semibold text-xl md:text-3xl mb-4">お問い合わせフォーム</h2>
      <MailForm />
    </main>
  );
}
