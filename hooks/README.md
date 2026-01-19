# useWineLearning Hook

A custom React hook for managing wine region and grape selection with synchronized map navigation and history tracking.

## Features

- **Active Region Management**: Track and manage the currently selected wine region
- **Active Grape Management**: Track and manage the currently selected grape variety
- **Navigation History**: Maintain a history stack for forward/backward navigation
- **Map Synchronization**: Automatically update map position when selecting grapes or regions
- **Related Data**: Automatically find related regions for grapes and vice versa

## Usage

```tsx
import { useWineLearning } from "@/hooks/useWineLearning";

function MyComponent() {
  const {
    activeRegion,
    activeGrape,
    mapPosition,
    selectRegion,
    selectGrape,
    goBack,
    goForward,
    clearSelection,
    canGoBack,
    canGoForward,
    relatedRegions,
    relatedGrapes,
  } = useWineLearning();

  return (
    <div>
      <WineAtlas
        activeRegion={activeRegion}
        mapPosition={mapPosition}
        onRegionSelect={selectRegion}
        onClose={clearSelection}
      />
      
      {activeGrape && (
        <GrapeCard
          grape={activeGrape}
          onClose={clearSelection}
        />
      )}
    </div>
  );
}
```

## API

### State

- `activeRegion: WineRegion | null` - Currently selected wine region
- `activeGrape: Grape | null` - Currently selected grape variety
- `history: NavigationState[]` - Array of navigation states
- `mapPosition: MapPosition | null` - Current map center and zoom level

### Actions

- `selectRegion(regionId: string)` - Select a region by ID, updates map position
- `selectGrape(grapeId: string)` - Select a grape by ID, finds related regions and updates map
- `goBack()` - Navigate to previous state in history
- `goForward()` - Navigate to next state in history
- `clearSelection()` - Clear all selections and reset map

### Computed

- `canGoBack: boolean` - Whether backward navigation is possible
- `canGoForward: boolean` - Whether forward navigation is possible
- `relatedRegions: WineRegion[]` - Regions that grow the active grape
- `relatedGrapes: Grape[]` - Grapes grown in the active region

## Map Synchronization

When a grape is selected:
- The hook finds all regions that grow that grape
- If one region is found, the map zooms to that region (zoom level 8)
- If multiple regions are found, the map centers on the average coordinates with zoom level 4
- If no regions are found, the map resets to default position

When a region is selected:
- The map immediately zooms to that region's coordinates (zoom level 8)

## Example Integration

See `app/learning/page.tsx` for a complete example integrating:
- WineAtlas component
- GrapeCard component
- Navigation controls
- Related items display
