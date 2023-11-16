// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for Header documents
 */
interface HeaderDocumentData {
  /**
   * Background Color field in *Header*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: header.background_color
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  background_color: prismic.ColorField;

  /**
   * Logo field in *Header*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: header.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * CTA Icon field in *Header*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: header.cta_icon
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  cta_icon: prismic.ImageField<never>;

  /**
   * CTA Message field in *Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.cta_message
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_message: prismic.KeyTextField;

  /**
   * CTA Phone field in *Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.cta_phone
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_phone: prismic.KeyTextField;

  /**
   * CTA Link field in *Header*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: header.cta_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link: prismic.LinkField;
}

/**
 * Header document from Prismic
 *
 * - **API ID**: `header`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HeaderDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HeaderDocumentData>,
    "header",
    Lang
  >;

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Primary Color field in *Settings*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.primary_color
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  primary_color: prismic.ColorField;

  /**
   * Secondary Color field in *Settings*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.secondary_color
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  secondary_color: prismic.ColorField;

  /**
   * Favicon field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.favicon
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  favicon: prismic.ImageField<never>;

  /**
   * Meta Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * OG Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes = HeaderDocument | SettingsDocument;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HeaderDocument,
      HeaderDocumentData,
      SettingsDocument,
      SettingsDocumentData,
      AllDocumentTypes,
    };
  }
}