import HorizontalUserTile, {
  HorizontalUserTileProps,
} from "../HorizontalUserTile";

export default function SuggestionItem(props: HorizontalUserTileProps) {
  return <HorizontalUserTile {...props} hideActive />;
}

SuggestionItem.displayName = "Suggestion.Item";
