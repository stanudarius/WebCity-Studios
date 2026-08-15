import { HeroSection } from '@/app/pasteis/components/pastelaria/hero-section'
import { LocationSection } from '@/app/pasteis/components/pastelaria/location-section'
import { MenuSection } from '@/app/pasteis/components/pastelaria/menu-section'
import { ReviewsSection } from '@/app/pasteis/components/pastelaria/reviews-section'
import { SiteFooter } from '@/app/pasteis/components/pastelaria/site-footer'
import { SiteHeader } from '@/app/pasteis/components/pastelaria/site-header'

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <SiteHeader />
      <HeroSection />
      <MenuSection />
      <ReviewsSection />
      <LocationSection />
      <SiteFooter />
    </div>
  )
}
