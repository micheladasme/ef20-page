// TradingViewWidget.jsx
import { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(
    () => {
      // Limpia el contenedor antes de agregar el script
      if (container.current) {
        container.current.innerHTML = '<div class="tradingview-widget-container__widget"></div>';
      }

      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            {
              "proName": "BITSTAMP:BTCUSD",
              "title": "Bitcoin"
            },
            {
              "proName": "BITSTAMP:ETHUSD",
              "title": "Ethereum"
            },
            {
              "proName": "BINANCE:TRXUSDT",
              "title": "Tron"
            },
            {
              "proName": "BINANCE:LINKUSDT",
              "title": "Link"
            },
            {
              "proName": "BINANCE:SOLUSDT",
              "title": "Solana"
            },

            {
              "proName": "BITGET:KLVUSDT",
              "title": "Klv"
            },
            {
              "proName": "BINANCE:JASMYUSDT",
              "title": "Jasmy"
            },
            {
              "proName": "OKX:CROUSDT",
              "title": "Cronos"
            },
            {
              "proName": "BINANCE:LTCUSDT",
              "title": "Litecoin"
            }
          ],
          "colorTheme": "dark",
          "locale": "es",
          "largeChartUrl": "",
          "isTransparent": false,
          "showSymbolLogo": true,
          "displayMode": "adaptive"
        }`;
      if (container.current) {
        container.current.appendChild(script);
      }

      // Limpieza al desmontar
      return () => {
        if (container.current) {
          container.current.innerHTML = '';
        }
      };
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(TradingViewWidget);
