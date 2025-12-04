import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface WorkflowStep {
  label: string;
  icon: LucideIcon;
}

export interface WorkflowFlow {
  title: string;
  description: string;
  steps: WorkflowStep[];
}

export interface FeatureItem {
  text: string;
  icon: LucideIcon;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  highlight?: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image?: string;
}
