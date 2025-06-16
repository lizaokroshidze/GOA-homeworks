function getSize(width, height, depth){
    const surfaceArea = 2 * (width * height + width * depth + height * depth);
    const volume = width * height * depth;
    return [surfaceArea, volume];
  }