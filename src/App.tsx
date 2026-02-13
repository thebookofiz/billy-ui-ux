import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { OnboardingLayout } from './layouts/OnboardingLayout'
import { Welcome } from './screens/Welcome'
import { ValueProps } from './screens/ValueProps'
import { Intent } from './screens/Intent'
import { ChooseDomains } from './screens/ChooseDomains'
import { PersonalizeSignal } from './screens/PersonalizeSignal'
import { ChooseTopic } from './screens/ChooseTopic'
import { AddFavorites } from './screens/AddFavorites'
import { CollectionCreated } from './screens/CollectionCreated'
import { FeedView } from './screens/FeedView'
import { WorldTop } from './screens/WorldTop'
import { SocialPerspective } from './screens/SocialPerspective'
import { CurateCouncil } from './screens/CurateCouncil'
import { CircleResults } from './screens/CircleResults'
import { OnboardingComplete } from './screens/OnboardingComplete'
import { SocialFeed } from './screens/SocialFeed'
import { StackDetail } from './screens/StackDetail'
import { SignalDetail } from './screens/SignalDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/onboarding/welcome" replace />} />

        <Route path="/onboarding" element={<OnboardingLayout />}>
          <Route path="welcome" element={<Welcome />} />
          <Route path="value-props" element={<ValueProps />} />
          <Route path="intent" element={<Intent />} />
          <Route path="domains" element={<ChooseDomains />} />
          <Route path="personalize" element={<PersonalizeSignal />} />
          <Route path="choose-topic" element={<ChooseTopic />} />
          <Route path="add-favorites" element={<AddFavorites />} />
          <Route path="collection-created" element={<CollectionCreated />} />
          <Route path="feed-view" element={<FeedView />} />
          <Route path="world-top" element={<WorldTop />} />
          <Route path="social" element={<SocialPerspective />} />
          <Route path="council" element={<CurateCouncil />} />
          <Route path="circle-results" element={<CircleResults />} />
          <Route path="complete" element={<OnboardingComplete />} />
        </Route>

        <Route path="/feed" element={<SocialFeed />} />
        <Route path="/stack/:id" element={<StackDetail />} />
        <Route path="/signal/:itemId" element={<SignalDetail />} />

        {/* Legacy redirect */}
        <Route path="/home" element={<Navigate to="/feed" replace />} />

        <Route path="*" element={<Navigate to="/onboarding/welcome" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
