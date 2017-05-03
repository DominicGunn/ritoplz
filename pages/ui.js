'use strict'

import Page from './../layouts/page'
import { Row, UiSelect, SocialButton, UiButton } from './../components/ui'

const options = [
  { value: 'sp', label: 'São Paulo' },
  { value: 'rj', label: 'Rio de Janeiro' },
  { value: 'cwb', label: 'Curitiba' }
]

const Ui = () => (
  <Page>
    <Row>
      <section>
        <h1>Ritoplz UI components</h1>

        <SocialButton href="https://github.com">
          Share on facebook
        </SocialButton>

        <SocialButton href="https://github.com" ui="twitter">
          Share on twitter
        </SocialButton>

        <UiButton ui="success" disabled={true}>Disabled button</UiButton>
        <UiButton ui="primary" disabled={true}>Disabled button</UiButton>
        <UiButton ui="danger" disabled={true}>Disabled button</UiButton>

        <div>
          <h2>Select</h2>

          <UiSelect
            placeholder="Select item"
            options={options}
            handleSelectChange={value => console.log(value)}
          />
        </div>
      </section>
    </Row>
  </Page>
)

export default Ui
