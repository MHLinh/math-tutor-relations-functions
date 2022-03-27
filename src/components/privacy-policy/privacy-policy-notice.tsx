import React from "react"
import { Typography, Link } from "@mui/material"

/**
 * A component displaying the privacy policy notice.
 */
export function PrivacyPolicyNotice() {
  return (
    <Typography variant="caption">
      By proceeding and using the application you agree to the&nbsp;
      <Link
          href="https://firebasestorage.googleapis.com/v0/b/math-tutor-54819.appspot.com/o/Privacy%20Policy.pdf?alt=media&token=e92cd047-8814-40d0-8ea8-0bf8d9671717"
          rel="noopener"
          target="_blank"
        >
          Privacy Policy
      </Link>.
    </Typography>
  )
}
