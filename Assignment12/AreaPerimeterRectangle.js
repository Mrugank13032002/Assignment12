function calculateRectangle(areaLength, areaWidth) {
    let area = areaLength * areaWidth;
    let perimeter = 2 * (areaLength + areaWidth);
    return { area, perimeter };
}
