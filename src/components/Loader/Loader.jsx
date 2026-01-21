import LoadingLogo from "@/assets/loading.png"
import styles from "./Loader.module.scss"

export default function Loader({ isExiting }) {
  return (
      

     <div
      className={`
        bg-gradient-to-b from-[#033949] to-[#0789AF] transition-all duration-700 ease-in-out
        ${styles.overlay} ${
        isExiting ? styles.exit : styles.enter
      }`}
    >
        <img src={LoadingLogo} className="w-113" alt="" />
      <div className={styles.loader}>
        
        {Array.from({ length: 15 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>
    </div>
  )
}