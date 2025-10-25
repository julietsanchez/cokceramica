'use client'

import FeatureCard from './FeatureCard'
import { Palette, Users, Flame } from 'lucide-react'

interface FeatureCardWrapperProps {
  iconName: string
  title: string
  description: string
  buttonText?: string
  buttonHref?: string
  buttonAction?: 'whatsapp' | 'link' | 'none'
  className?: string
}

const iconMap = {
  Palette,
  Users,
  Flame,
}

export default function FeatureCardWrapper(props: FeatureCardWrapperProps) {
  const { iconName, ...restProps } = props
  const Icon = iconMap[iconName as keyof typeof iconMap]
  
  return <FeatureCard icon={Icon} {...restProps} />
}
