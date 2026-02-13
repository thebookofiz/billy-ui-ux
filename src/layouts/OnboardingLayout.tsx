import { Outlet } from 'react-router-dom'

export function OnboardingLayout() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Outlet />
    </div>
  )
}
