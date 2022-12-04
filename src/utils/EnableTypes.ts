enum EnableTypes {
    Png = "image/png",
    Jpeg = "image/jpeg",
    Jpg = "image/jpg"
}

const isEnabled = (type: string) => {
    return type === EnableTypes.Png || type === EnableTypes.Jpeg || type === EnableTypes.Jpg;
};

export default isEnabled;