import { motion } from 'framer-motion';
import { Link } from 'react-router';
import '../NoPage/NoPage.css'

function NoPage() {
  return (
    <>
      <title>Error</title>
      <div className="error-container"><motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        404
      </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Üzr istəyirik, səhifə tapılmadı.
        </motion.p>
        <motion.div className="button-link"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/">Ana səhifəyə qayıt</Link>
        </motion.div></div>
    </>
  )
}

export default NoPage