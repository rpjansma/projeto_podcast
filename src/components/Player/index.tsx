import styles from './styles.module.scss';

export function Player() {
  return (
    <div className={styles.playerContainer}>
      <header>
        <img src="/playing.svg" alt="Tocando agora" />
        <strong>Tocando agora</strong>
      </header>

      <div className={styles.emptyPlayer}>
        <strong></strong>
      </div>

      <footer>
        <div className={styles.progress}>
          <span>00:00</span>
          <div className={styles.emptySlider} />
          <span>00:00</span>
        </div>

        <div>
          <button>
            <img src="/suffle.svg" alt="Embaralhar" />
          </button>
          <button>
            <img src="/play-previous.svg" alt="Tocar anterior" />
          </button>
          <button>
            <img src="/play.svg" alt="Tocar" />
          </button>
          <button>
            <img src="/suffle.svg" alt="Tocar próxima" />
          </button>
          <button>
            <img src="/suffle.svg" alt="Repetir" />
          </button>
        </div>
      </footer>
    </div>
  );
}
