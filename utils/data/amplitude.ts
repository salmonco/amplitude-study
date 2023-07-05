import * as amplitude from '@amplitude/analytics-browser'

const isProduction = process.env.NODE_ENV === 'production'
const AMPLITUDE_PROD_KEY = '48fb2c39fb1ae1ed7b92ea8028c5b0c1'
const AMPLITUDE_DEV_KEY = '20bf712f53c49e5a3859ea17dbc054fb'
const AMPLITUDE_KEY = isProduction ? AMPLITUDE_PROD_KEY : AMPLITUDE_DEV_KEY
const isBrowser = () => typeof window !== 'undefined'

function getUserInfo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: '1235',
        name: 'John Doe'
      })
    })
  })
}

const initAmplitude = async () => {
  const user: any = await getUserInfo()
  if (isBrowser()) {
    amplitude.init(AMPLITUDE_KEY, user.id ? `test-${user.id}` : undefined, {
      defaultTracking: {
        pageViews: false
      }
    })
  }
}

const setUserInfo = () => {
  // 최대한 유저에 관련된 정보 넣기
  const userProperties = new amplitude.Identify()
  userProperties.set('name', 'John Doe') // 평생 저장됨
  userProperties.set('age', 24)
  amplitude.identify(userProperties)
}

initAmplitude()
