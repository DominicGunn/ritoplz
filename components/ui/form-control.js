'use strict'

import { UiButton, UiLink } from './'

const FormControl = () => (
  <div className="form-control">
    <UiLink href="/profile" ui="link default">Cancel</UiLink>
    <UiButton ui="success" type="submit">Save settings</UiButton>

    <style jsx>{`
      .form-control {
        display: flex;
        justify-content: flex-end;
      }
    `}</style>
  </div>
)

export default FormControl
