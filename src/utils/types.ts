import * as React from "react";
import { VIDEO_PLAYBACK_SPEED } from "./constants";

// Component Props
export type AsProps<T extends React.ElementType> = { as?: T };

export type PropsToOmit<T extends React.ElementType, P> = keyof (AsProps<T> &
  P);

export type PolymorphicProps<
  T extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<Props & AsProps<T>> &
  Omit<React.ComponentPropsWithoutRef<T>, PropsToOmit<T, Props>>;

export type PolymorphicRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>["ref"];

export type PolymorphicPropsWithRef<
  T extends React.ElementType,
  Props = {}
> = PolymorphicProps<T, Props> & { ref?: PolymorphicRef<T> };

export type AttachmentType = "DOCUMENT" | "AUDIO" | "VIDEO" | "IMAGE";
export type MediaType = "IMAGES" | "VIDEOS" | "DOCUMENTS";

export type VideoPlaybackSpeedType = typeof VIDEO_PLAYBACK_SPEED[number];
export type VideoPlaybackQualityType = "hd" | "sd";
