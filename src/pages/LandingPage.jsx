import { useEffect, useState } from "react";
import {useTranslation} from "react-i18next";

const Landing = () => {
  const [showContent, setShowContent] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen min-w-full flex items-center justify-center bg-black">
      <section className="landing-page min-h-screen min-w-full flex items-center justify-center overflow-hidden">
        {!showContent && (
          <section className="animation">
            <div className="text-center">
              <p className="text-white animate-float-words animate-endorphine">
                Endorphine
              </p>
              <p className="text-white animate-float-words animate-oxytocin">
                Oxytocin
              </p>
              <p className="text-white animate-float-words animate-dopamine">
                dopamine
              </p>
              <p>{t('common.hello')}</p>
            </div>
          </section>
        )}
        {showContent && (
          <section className="content text-white">
            Your constant content goes here<p>{t('common.hello')}</p>
          </section>
        )}
      </section>
    </section>
  );
};

export default Landing;
