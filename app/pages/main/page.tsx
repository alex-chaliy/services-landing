import MainHeading from '@/app/components/headings/main-heading/MainHeading';
import './main-page.scss';
import MainScreen from '@/app/features/main-screen/MainScreen';
import SubHeading from '@/app/components/headings/sub-heading/SubHeading';
import { DEFAULT_FEATURES } from '@/app/components/features-block/FeaturesBlock.constants';
import FeaturesBlock from '@/app/components/features-block/FeaturesBlock';
import GlassCard from '@/app/components/glass-card/GlassCard';

export default function MainPage() {
  return (
    <div className="app-main-page">
      <MainScreen className="app-main-page__main-screen" />

      <div className="app-main-page__text-screen app-pt-25">
        <MainHeading
          className="app-main-page__heading"
          title={'Reliable Plumber Services'}
        />
        <SubHeading
          className="app-main-page__sub-heading app-mb-10"
          title={'Your Trusted Local Plumber'}
        />
        <GlassCard className="app-main-page__features-glass-card">
          <FeaturesBlock
            className="app-main-page__features-block app-mt-50"
            features={[...DEFAULT_FEATURES]}
          />
        </GlassCard>
        <div className="app-main-page__text app-pb-50">
          Plumbing services encompass the specialized work of installing, repairing, and
          maintaining systems that distribute clean water and dispose of wastewater within
          a building. These services ensure proper sanitation, safety, and functionality
          for residential and commercial structures. Plumbing services are generally
          categorized into three main areas: 1. Installation This involves setting up the
          "backbone" of a building's water and waste systems, often during construction or
          remodeling: Piping Systems: Installing main water supply lines, drainage pipes,
          and sewer lines. Fixtures: Fitting essential items like toilets, sinks, faucets,
          bathtubs, and showers. Appliances: Connecting water-dependent machines such as
          dishwashers, washing machines, and garbage disposals. Gas Lines: Many licensed
          plumbers also install and safely connect gas lines for stoves, heaters, and
          fireplaces. 2. Repair and Troubleshooting Plumbers are most frequently called to
          fix malfunctioning components to prevent water damage: Leak Detection and Fixes:
          Identifying and repairing drips in faucets, leaking toilets, or burst pipes
          hidden behind walls. Drain Cleaning: Clearing blockages in sinks, tubs, and main
          sewer lines using tools like "snakes" (augers) or high-pressure hydro-jetting.
          Water Heater Service: Repairing or replacing malfunctioning thermostats, heating
          elements, or entire water heater tanks. Emergency Services: Addressing urgent
          crises like overflowing toilets or major floods that require immediate response
          outside regular hours. 3. Maintenance and Inspection Routine care helps extend
          the life of plumbing systems and prevents costly failures: System Flushes:
          Cleaning out sediment from water heaters to maintain efficiency. Video
          Inspections: Using specialized cameras to see inside sewer lines for tree root
          intrusion or cracks. Pressure Checks: Testing water pressure and backflow
          prevention devices to ensure water quality and system safety. Key
          Sub-Specialties Potable Water Systems: Focused on the "incoming" side—bringing
          fresh, clean water into the structure. Sanitary Drainage Systems: Focused on the
          "exit" side—removing wastewater safely. Commercial Plumbing: Dealing with
          larger-scale systems in office buildings, restaurants (e.g., grease trap
          cleaning), or factories.
        </div>
        <div className="app-main-page__text app-pb-50">
          Plumbing services encompass the specialized work of installing, repairing, and
          maintaining systems that distribute clean water and dispose of wastewater within
          a building. These services ensure proper sanitation, safety, and functionality
          for residential and commercial structures. Plumbing services are generally
          categorized into three main areas: 1. Installation This involves setting up the
          "backbone" of a building's water and waste systems, often during construction or
          remodeling: Piping Systems: Installing main water supply lines, drainage pipes,
          and sewer lines. Fixtures: Fitting essential items like toilets, sinks, faucets,
          bathtubs, and showers. Appliances: Connecting water-dependent machines such as
          dishwashers, washing machines, and garbage disposals. Gas Lines: Many licensed
          plumbers also install and safely connect gas lines for stoves, heaters, and
          fireplaces. 2. Repair and Troubleshooting Plumbers are most frequently called to
          fix malfunctioning components to prevent water damage: Leak Detection and Fixes:
          Identifying and repairing drips in faucets, leaking toilets, or burst pipes
          hidden behind walls. Drain Cleaning: Clearing blockages in sinks, tubs, and main
          sewer lines using tools like "snakes" (augers) or high-pressure hydro-jetting.
          Water Heater Service: Repairing or replacing malfunctioning thermostats, heating
          elements, or entire water heater tanks. Emergency Services: Addressing urgent
          crises like overflowing toilets or major floods that require immediate response
          outside regular hours. 3. Maintenance and Inspection Routine care helps extend
          the life of plumbing systems and prevents costly failures: System Flushes:
          Cleaning out sediment from water heaters to maintain efficiency. Video
          Inspections: Using specialized cameras to see inside sewer lines for tree root
          intrusion or cracks. Pressure Checks: Testing water pressure and backflow
          prevention devices to ensure water quality and system safety. Key
          Sub-Specialties Potable Water Systems: Focused on the "incoming" side—bringing
          fresh, clean water into the structure. Sanitary Drainage Systems: Focused on the
          "exit" side—removing wastewater safely. Commercial Plumbing: Dealing with
          larger-scale systems in office buildings, restaurants (e.g., grease trap
          cleaning), or factories.
        </div>
        <div className="app-main-page__text app-pb-50">
          Plumbing services encompass the specialized work of installing, repairing, and
          maintaining systems that distribute clean water and dispose of wastewater within
          a building. These services ensure proper sanitation, safety, and functionality
          for residential and commercial structures. Plumbing services are generally
          categorized into three main areas: 1. Installation This involves setting up the
          "backbone" of a building's water and waste systems, often during construction or
          remodeling: Piping Systems: Installing main water supply lines, drainage pipes,
          and sewer lines. Fixtures: Fitting essential items like toilets, sinks, faucets,
          bathtubs, and showers. Appliances: Connecting water-dependent machines such as
          dishwashers, washing machines, and garbage disposals. Gas Lines: Many licensed
          plumbers also install and safely connect gas lines for stoves, heaters, and
          fireplaces. 2. Repair and Troubleshooting Plumbers are most frequently called to
          fix malfunctioning components to prevent water damage: Leak Detection and Fixes:
          Identifying and repairing drips in faucets, leaking toilets, or burst pipes
          hidden behind walls. Drain Cleaning: Clearing blockages in sinks, tubs, and main
          sewer lines using tools like "snakes" (augers) or high-pressure hydro-jetting.
          Water Heater Service: Repairing or replacing malfunctioning thermostats, heating
          elements, or entire water heater tanks. Emergency Services: Addressing urgent
          crises like overflowing toilets or major floods that require immediate response
          outside regular hours. 3. Maintenance and Inspection Routine care helps extend
          the life of plumbing systems and prevents costly failures: System Flushes:
          Cleaning out sediment from water heaters to maintain efficiency. Video
          Inspections: Using specialized cameras to see inside sewer lines for tree root
          intrusion or cracks. Pressure Checks: Testing water pressure and backflow
          prevention devices to ensure water quality and system safety. Key
          Sub-Specialties Potable Water Systems: Focused on the "incoming" side—bringing
          fresh, clean water into the structure. Sanitary Drainage Systems: Focused on the
          "exit" side—removing wastewater safely. Commercial Plumbing: Dealing with
          larger-scale systems in office buildings, restaurants (e.g., grease trap
          cleaning), or factories.
        </div>
      </div>
    </div>
  );
}
