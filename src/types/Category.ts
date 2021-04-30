export interface Category {
  'id': string,
  'orderBy': number,
  'hdThumbnailUrl': string,
  'thumbnailUrl': string,
  'imageUrl': string,
  'originalImageUrl': string,
  'originalImage': {
    'url': string,
    'width': number,
    'height': number
  },
  'thumbnail': {
    'url': string,
    'width': number,
    'height': number
  },
  'name': string,
  'nameTranslated': {
    'en': string
  },
  'url': string,
  'productCount': number,
  'enabledProductCount': number,
  'description': string,
  'descriptionTranslated': {
    'en': string
  },
  'enabled': boolean
}
