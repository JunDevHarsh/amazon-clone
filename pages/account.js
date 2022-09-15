import Head from "next/head";
import AccountModal from "../components/AccountModal/AccountModal";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MenuBar from "../components/MenuBar/MenuBar";

const Account = () => {
  const accountModalList = [
    {
      title: "Your Orders",
      href: "your-orders",
      text: "Track or return orders",
      image: "package",
    },
    {
      title: "Login & Security",
      href: "login-and-security",
      text: "Edit login, name and email",
      image: "padlock",
    },
    {
      title: "Payment Options",
      href: "payment-option",
      text: "Edit or add payment methods",
      image: "credit-cards",
    },
    {
      title: "Amazon-clone Balance",
      href: "amazon-clone-balance",
      text: "Add money to your balance",
      image: "wallet",
    },
  ];
  return (
    <div>
      <Head>
        <title>Your Account</title>
        <meta
          name="description"
          content="Amazon-clone: The goal of this project is to make a clone of the world's largest e-commerce website i.e. Amazon.in by using next-js."
        />
        <meta
          name="keywords"
          content="amazon-clone, amazon, e-commerce shopping, next-js"
        />
        <meta name="google" content="nositelinkssearchbox" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" href="/icons/amazon-icon.webp" />
      </Head>
      <main className="relative w-full bg-white">
        <Header />
        <MenuBar />
        <div className="relative w-full">
          <div className="max-w-5xl w-full mx-auto my-4">
            <h2 className="text-black text-3xl font-normal tracking-wider">
              Your Account
            </h2>
            <div className="py-4 grid grid-cols-3 gap-4">
              {accountModalList.map((modalItem) => (
                <AccountModal
                  key={modalItem.title}
                  title={modalItem.title}
                  href={modalItem.href}
                  text={modalItem.text}
                  image={modalItem.image}
                />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Account;
