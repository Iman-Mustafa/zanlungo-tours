import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import QuickConnect from "../components/QuickConnect";
import { useLanguage } from "../context/LanguageContext";
import { Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_PHONE = "255778670092";
const LAST_UPDATED = { en: "October 2026", it: "Ottobre 2026" };

/*
 * NOTE: Template legal content for a Zanzibar-based tour operator.
 * Have it reviewed by the business owner / a legal advisor before going live.
 */
const legalContent = {
  privacy: {
    en: {
      badge: "Legal",
      title: "Privacy Policy",
      intro:
        "Zan Lungo Tour and Safari (\"we\", \"us\") respects your privacy. This policy explains what personal information we collect when you visit our website or book a transfer, tour or safari with us, and how we use and protect it.",
      sections: [
        {
          id: "collect",
          heading: "Information We Collect",
          body: [
            "Contact details you provide: name, email address, phone / WhatsApp number and country of residence.",
            "Booking details: travel dates, flight or ferry numbers, hotel name, number of travellers, dietary or accessibility needs.",
            "Passport details only when legally required, e.g. for national park permits or domestic flights.",
            "Basic technical data such as browser type and pages visited, used to keep the website working well.",
          ],
        },
        {
          id: "use",
          heading: "How We Use Your Information",
          body: [
            "To confirm, organise and deliver your transfers, day tours and safaris.",
            "To track your flight or ferry so your driver is on time, even with delays.",
            "To contact you about your booking by WhatsApp, phone or email.",
            "To meet legal, tax and park-authority requirements in Tanzania.",
            "We never sell your personal data or use it for unrelated marketing without your consent.",
          ],
        },
        {
          id: "share",
          heading: "Sharing With Trusted Partners",
          body: [
            "We only share the information needed to deliver your trip with partners such as hotels and lodges, domestic airlines, boat operators, and Tanzania National Parks (TANAPA) or Ngorongoro authorities.",
            "Messages sent via WhatsApp are also subject to WhatsApp's own privacy policy.",
          ],
        },
        {
          id: "retention",
          heading: "Data Storage & Retention",
          body: [
            "We keep booking records only as long as needed to provide our services and meet accounting and legal obligations, after which they are deleted or anonymised.",
            "We use reasonable technical and organisational measures to protect your data against loss or unauthorised access.",
          ],
        },
        {
          id: "rights",
          heading: "Your Rights",
          body: [
            "You may ask to access, correct or delete the personal information we hold about you, or withdraw consent to being contacted.",
            "Guests from the EU/UK may also have rights under the GDPR. Contact us and we will respond promptly.",
          ],
        },
        {
          id: "cookies",
          heading: "Cookies",
          body: [
            "Our website uses only essential browser storage (for example, to remember your English / Italian language choice). We do not use advertising cookies.",
          ],
        },
      ],
    },
    it: {
      badge: "Note Legali",
      title: "Privacy Policy",
      intro:
        "Zan Lungo Tour and Safari (\"noi\") rispetta la tua privacy. Questa informativa spiega quali dati personali raccogliamo quando visiti il nostro sito o prenoti un trasferimento, un tour o un safari, e come li utilizziamo e proteggiamo.",
      sections: [
        {
          id: "collect",
          heading: "Dati che Raccogliamo",
          body: [
            "Dati di contatto forniti da te: nome, email, numero di telefono / WhatsApp e paese di residenza.",
            "Dettagli della prenotazione: date di viaggio, numeri di volo o traghetto, hotel, numero di viaggiatori, esigenze alimentari o di accessibilità.",
            "Dati del passaporto solo quando richiesto per legge, ad es. per i permessi dei parchi nazionali o voli interni.",
            "Dati tecnici di base come tipo di browser e pagine visitate, per mantenere il sito funzionante.",
          ],
        },
        {
          id: "use",
          heading: "Come Utilizziamo i Tuoi Dati",
          body: [
            "Per confermare, organizzare ed erogare trasferimenti, tour giornalieri e safari.",
            "Per monitorare il tuo volo o traghetto e garantire la puntualità dell'autista, anche in caso di ritardi.",
            "Per contattarti riguardo alla prenotazione via WhatsApp, telefono o email.",
            "Per rispettare gli obblighi legali, fiscali e delle autorità dei parchi in Tanzania.",
            "Non vendiamo mai i tuoi dati né li usiamo per marketing non correlato senza il tuo consenso.",
          ],
        },
        {
          id: "share",
          heading: "Condivisione con Partner di Fiducia",
          body: [
            "Condividiamo solo le informazioni necessarie con partner come hotel e lodge, compagnie aeree interne, operatori di barche e le autorità dei parchi nazionali (TANAPA) o di Ngorongoro.",
            "I messaggi inviati tramite WhatsApp sono soggetti anche alla privacy policy di WhatsApp.",
          ],
        },
        {
          id: "retention",
          heading: "Conservazione dei Dati",
          body: [
            "Conserviamo i dati di prenotazione solo per il tempo necessario a fornire i servizi e rispettare gli obblighi contabili e legali, dopodiché vengono cancellati o anonimizzati.",
            "Adottiamo misure tecniche e organizzative ragionevoli per proteggere i tuoi dati da perdita o accesso non autorizzato.",
          ],
        },
        {
          id: "rights",
          heading: "I Tuoi Diritti",
          body: [
            "Puoi richiedere l'accesso, la rettifica o la cancellazione dei tuoi dati, oppure revocare il consenso a essere contattato.",
            "Gli ospiti dell'UE/Regno Unito possono avere ulteriori diritti ai sensi del GDPR. Contattaci e risponderemo tempestivamente.",
          ],
        },
        {
          id: "cookies",
          heading: "Cookie",
          body: [
            "Il nostro sito utilizza solo memorizzazione essenziale del browser (ad esempio per ricordare la lingua scelta). Non utilizziamo cookie pubblicitari.",
          ],
        },
      ],
    },
  },
  terms: {
    en: {
      badge: "Legal",
      title: "Terms of Service",
      intro:
        "These terms apply to all airport and port transfers, Zanzibar day tours and Tanzania safaris booked with Zan Lungo Tour and Safari. By confirming a booking, you agree to the terms below.",
      sections: [
        {
          id: "booking",
          heading: "Bookings & Confirmation",
          body: [
            "Bookings can be made via WhatsApp, phone or email. A booking is confirmed only once you receive a written confirmation from us.",
            "Please provide accurate details (names, flight/ferry numbers, hotel, number of guests). We are not responsible for issues caused by incorrect information.",
          ],
        },
        {
          id: "payment",
          heading: "Prices & Payment",
          body: [
            "Prices are quoted in USD unless stated otherwise and are fixed at the time of confirmation – no hidden fees.",
            "Some services, especially multi-day and fly-in safaris, require a deposit to secure flights, park permits and accommodation. The amount and due date are stated in your confirmation.",
            "Inclusions and exclusions (park fees, meals, drinks, tips) are listed for each package.",
          ],
        },
        {
          id: "cancel",
          heading: "Cancellations & Changes",
          body: [
            "Cancellation conditions depend on the service and are stated in your booking confirmation. Please notify us as early as possible.",
            "Third-party costs already paid on your behalf (e.g. domestic flights, park permits, lodges) may be non-refundable.",
            "We may adjust itineraries due to weather, sea conditions, park regulations or safety. We will always offer a suitable alternative or refund for services not delivered.",
          ],
        },
        {
          id: "transfers",
          heading: "Transfers & Delays",
          body: [
            "We monitor arrival times for airport and port pickups and adjust for delays at no extra cost.",
            "For departures, please be ready at the agreed pickup time. We are not liable for missed flights or ferries caused by late readiness.",
          ],
        },
        {
          id: "safety",
          heading: "Health, Safety & Insurance",
          body: [
            "Comprehensive travel insurance (medical, evacuation and cancellation) is strongly recommended for all guests.",
            "Guests must follow the instructions of guides and drivers at all times, especially during game drives and marine excursions.",
            "Please inform us in advance of any medical conditions, mobility needs or dietary requirements.",
          ],
        },
        {
          id: "liability",
          heading: "Liability",
          body: [
            "We act with care in arranging all services. We are not liable for loss, injury, delay or expense caused by events beyond our control, including weather, natural events, strikes, government actions, or the acts of independent third-party suppliers.",
            "Wildlife sightings are never guaranteed, as animals live freely in their natural habitat.",
          ],
        },
      ],
    },
    it: {
      badge: "Note Legali",
      title: "Termini di Servizio",
      intro:
        "Questi termini si applicano a tutti i trasferimenti da aeroporto e porto, ai tour giornalieri a Zanzibar e ai safari in Tanzania prenotati con Zan Lungo Tour and Safari. Confermando una prenotazione accetti i termini seguenti.",
      sections: [
        {
          id: "booking",
          heading: "Prenotazioni e Conferma",
          body: [
            "Le prenotazioni possono essere effettuate via WhatsApp, telefono o email. La prenotazione è confermata solo dopo aver ricevuto una nostra conferma scritta.",
            "Fornisci dati corretti (nomi, numeri di volo/traghetto, hotel, numero di ospiti). Non siamo responsabili per problemi causati da informazioni errate.",
          ],
        },
        {
          id: "payment",
          heading: "Prezzi e Pagamenti",
          body: [
            "I prezzi sono espressi in USD salvo diversa indicazione e sono fissi al momento della conferma – nessun costo nascosto.",
            "Alcuni servizi, in particolare safari di più giorni e in volo, richiedono un acconto per garantire voli, permessi e alloggi. Importo e scadenza sono indicati nella conferma.",
            "Inclusioni ed esclusioni (ingressi ai parchi, pasti, bevande, mance) sono indicate per ogni pacchetto.",
          ],
        },
        {
          id: "cancel",
          heading: "Cancellazioni e Modifiche",
          body: [
            "Le condizioni di cancellazione dipendono dal servizio e sono indicate nella conferma di prenotazione. Ti preghiamo di avvisarci il prima possibile.",
            "I costi di terzi già sostenuti per tuo conto (voli interni, permessi dei parchi, lodge) potrebbero non essere rimborsabili.",
            "Possiamo modificare gli itinerari per meteo, condizioni del mare, regolamenti dei parchi o sicurezza. Offriremo sempre un'alternativa adeguata o il rimborso dei servizi non erogati.",
          ],
        },
        {
          id: "transfers",
          heading: "Trasferimenti e Ritardi",
          body: [
            "Monitoriamo gli orari di arrivo per i pickup da aeroporto e porto e ci adeguiamo ai ritardi senza costi aggiuntivi.",
            "Per le partenze, ti chiediamo di essere pronto all'orario concordato. Non siamo responsabili per voli o traghetti persi a causa di ritardi del cliente.",
          ],
        },
        {
          id: "safety",
          heading: "Salute, Sicurezza e Assicurazione",
          body: [
            "Si raccomanda vivamente un'assicurazione di viaggio completa (spese mediche, evacuazione e cancellazione).",
            "Gli ospiti devono sempre seguire le istruzioni di guide e autisti, soprattutto durante i game drive e le escursioni in mare.",
            "Informaci in anticipo di eventuali condizioni mediche, esigenze di mobilità o alimentari.",
          ],
        },
        {
          id: "liability",
          heading: "Responsabilità",
          body: [
            "Organizziamo tutti i servizi con cura. Non siamo responsabili per perdite, infortuni, ritardi o spese causati da eventi al di fuori del nostro controllo, inclusi meteo, eventi naturali, scioperi, azioni governative o atti di fornitori terzi indipendenti.",
            "Gli avvistamenti di animali non sono mai garantiti, poiché vivono liberi nel loro habitat naturale.",
          ],
        },
      ],
    },
  },
};

export default function Legal({ type = "privacy" }) {
  const { lang, t } = useLanguage();
  const c = legalContent[type][lang];

  // Links live in the footer, so always start at the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  useEffect(() => {
    document.title = `${c.title} – Zan Lungo Tours & Safaris`;
  }, [lang, type]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const whatsappMsg = t(
    "Hello Zan Lungo Tours! I have a question about your policies.",
    "Ciao Zan Lungo Tours! Ho una domanda sulle vostre condizioni."
  );

  return (
    <div className="min-h-screen bg-[#F4F1EA]/20">
      <Navigation />

      {/* Hero Banner */}
      <section className="bg-[#1C2826] pt-36 md:pt-40 pb-16 md:pb-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center bg-[#1C2826] border border-[#D4AF37]/40 rounded-xl px-5 py-2.5 shadow-lg">
            <span className="text-xs font-extrabold text-[#D4AF37] uppercase tracking-wider">{c.badge}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">{c.title}</h1>
          <p className="text-gray-400 text-xs uppercase tracking-wider">
            {t("Last updated", "Ultimo aggiornamento")}: {LAST_UPDATED[lang]}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 items-start">
        {/* Table of contents */}
        <aside className="lg:sticky lg:top-28 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
          <p className="text-xs font-extrabold text-[#1C2826] uppercase tracking-wider">
            {t("On this page", "In questa pagina")}
          </p>
          <ul className="space-y-2">
            {c.sections.map((s, i) => (
              <li key={s.id}>
                <button
                  id={`toc-${s.id}`}
                  onClick={() => scrollTo(s.id)}
                  className="text-left text-sm text-gray-500 hover:text-[#D4AF37] transition-colors flex gap-2"
                >
                  <span className="text-[#D4AF37] font-bold">{String(i + 1).padStart(2, "0")}</span>
                  {s.heading}
                </button>
              </li>
            ))}
          </ul>
          <div className="border-t border-gray-100 pt-4">
            <Link
              to={type === "privacy" ? "/terms" : "/privacy"}
              className="text-xs font-bold text-[#1C2826] hover:text-[#D4AF37] uppercase tracking-wider transition-colors"
            >
              {type === "privacy"
                ? t("Terms of Service →", "Termini di Servizio →")
                : t("Privacy Policy →", "Privacy Policy →")}
            </Link>
          </div>
        </aside>

        {/* Sections */}
        <article className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-12 space-y-10">
          <p className="text-base text-gray-600 leading-relaxed font-light">{c.intro}</p>

          {c.sections.map((s, i) => (
            <div key={s.id} id={s.id} className="scroll-mt-28 space-y-4">
              <h2 className="text-xl font-black text-[#1C2826] uppercase tracking-tight flex items-center gap-3">
                <span className="text-sm bg-[#1C2826] text-[#D4AF37] rounded-lg w-8 h-8 flex items-center justify-center flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.heading}
              </h2>
              <ul className="space-y-2.5 pl-11">
                {s.body.map((line, idx) => (
                  <li key={idx} className="text-sm text-gray-600 leading-relaxed font-light list-disc marker:text-[#D4AF37]">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="bg-[#1C2826] rounded-2xl p-8 space-y-4">
            <h2 className="text-lg font-black text-white uppercase tracking-tight">
              {t("Questions? Contact Us", "Domande? Contattaci")}
            </h2>
            <p className="text-sm text-gray-400 font-light">
              {t(
                "If you have any questions about this page, our team is happy to help.",
                "Per qualsiasi domanda su questa pagina, il nostro team è a tua disposizione."
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition"
              >
                <FaWhatsapp size={15} /> WhatsApp
              </a>
              <a
                href="mailto:info@zanlungotours.com"
                className="flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#c49f2f] text-[#1C2826] px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition"
              >
                <Mail size={13} /> info@zanlungotours.com
              </a>
              <a
                href="tel:+255778670092"
                className="flex items-center justify-center gap-2 border border-white/20 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition"
              >
                <Phone size={13} /> +255 778 670 092
              </a>
            </div>
          </div>
        </article>
      </section>

      <Footer />
      <QuickConnect />
    </div>
  );
}
