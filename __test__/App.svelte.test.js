require('@testing-library/jest-dom/extend-expect')
const { render } = require('@testing-library/svelte')

const App = require('../src/App.svelte')
describe('App', () => {
  let subject
  beforeEach(() => {
    subject = render(App)
    console.log(subject.getByTitle('ALLCAPS.dev Logo').className)
  })
  test('attribution is displayed', () => {
    expect(subject.getByText(/other icons by/)).toBeInTheDocument()
  })
  test('logo is displayed', () => {
    expect(subject.getByTitle('ALLCAPS.dev Logo')).toBeInTheDocument()
  })
  describe('Social Icons', () => {
    const social = [
      {
        name: 'Github',
        url: 'https://github.com/ALLCAPSDEV',
      },
      {
        name: 'NPM JS',
        url: 'https://www.npmjs.com/org/allcapsdev',
      },
    ]

    for (const icon of social) {
      describe(`${icon.name} icon`, () => {
        let subjectIcon
        beforeEach(() => {
          subjectIcon = subject.getByAltText(icon.name)
        })
        test('icon is displayed', () => {
          expect(subjectIcon).toBeInTheDocument()
        })
        test('icon is linked to correct URL', () => {
          expect(subjectIcon.closest('a')).toHaveAttribute('href', icon.url)
        })
      })
    }
  })
})
