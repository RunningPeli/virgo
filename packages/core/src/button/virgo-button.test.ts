import { fireEvent, render, screen } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import VirgoButton from './virgo-button.vue'

describe('button', () => {
  it('should emit a click event when clicked', async () => {
    const { emitted } = render(VirgoButton, {
      props: {
        text: 'Hello',
      },
    })

    await fireEvent.click(screen.getByText('Hello'))

    expect(emitted()).toMatchInlineSnapshot(`
      {
        "click": [
          [
            MouseEvent {
              "isTrusted": false,
            },
          ],
        ],
      }
    `)
  })

  describe('hello button', () => {
    it('should render a button with hello text', () => {
      const button = render(VirgoButton, {
        props: {
          text: 'Hello'
        },
      })

      expect(button.html()).toMatchSnapshot()
    })
  })
})