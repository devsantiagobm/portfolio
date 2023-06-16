function profile(t){
    return [
        {
            name: t("profile.about_me"),
            description: t("profile.about_me_text"),
            id: 1,
        },
        {
            name: t("profile.why_develop"),
            description: t("profile.why_develop_text"),
            id: 2
        },
        {
            name: t("profile.current_employment"),
            description: t("profile.current_employment_text"),
            id: 3
        },
        {
            name: t("profile.what_i_build"),
            description: t("profile.what_i_build_text"),
            id: 4
        },
    ]
}


export default profile