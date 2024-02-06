import {SectionType} from "../components/shared/types/SectionType";
// @ts-ignore
import herosectionPic from "../assets/hero_section_pic.png";
// @ts-ignore
import propositionsPic from "../assets/propositions_pic.png";
// @ts-ignore
import analysisPic from "../assets/analysis_pic.png";
import {Step as StepType} from "../components/shared/types/Step";

export const heroSection: SectionType = {
    title: "Entdecke eine neue Dimension der Wetteranalyse",
    description: "Erlebe durch unsere erweiterte Wetteranalysen eine einzigartige Art mit einer Wetter-App zu interagieren. So eine Wetter-App hast du noch nie gesehen!",
    image: herosectionPic,
}
export const sections: SectionType[] = [
    {
        title: "Regelmäßige Vorschläge",
        description: "Mit der dm-Wetter-App kannst du deinen Tag noch besser organisieren. Basierend auf der aktuellen Wetterlage senden wir dir stündliche (Alle drei Stunden) Vorschläge für deine Aktivitäten.\n" +
            "Solltest du zum Beispiel an einem sonnigen Tag ein Picknick im Park planen, bekommst du von der App einen Vorschlag für ein gutes Fahrverhalten. Und wenn es regnet, empfehlen wir dir eine Indoor-Aktivität, wie zum Beispiel einen Museumsbesuch oder einen Kinobesuch.",
        subtitle: "Vorschläge",
        image: propositionsPic,
    },
    {
        title: "Fünf-Tage-Vorhersage",
        description: " Mit der 5-Tage-Wettervorhersage in der App kannst du deine Woche noch besser planen. Die Vorhersage zeigt dir, wie sich das Wetter in den nächsten Tagen entwickeln wird.",
        subtitle: "Vorhersage",
        image: herosectionPic,
    },
    {
        title: "Eweiterte Analysen",
        description: "Mit unseren erweiterten Analysen können wir dir den Verlauf von Wetter-Kennzahlen wie Temperatur, Luftfeuchtigkeit, Luftgeschwindigkeit usw. bis zu 6 Tage im Voraus mit hoher Genauigkeit vorhersagen.",
        subtitle: "Analysen",
        image: analysisPic,
    },
]

export const steps: StepType[] = [
    {
        title: "Schritt 1 Ueberschrift",
        subtitle: "1. Schritt",
        description: "Such dir ein Fach aus.",
    },
    {
        title: "Schritt 2 Ueberschrift",
        subtitle: "2. Schritt",
        description: "Wähle eine Aufgabe aus.",
    },
    {
        title: "Schritt 3 Ueberschrift",
        subtitle: "3. Schritt",
        description: "Such dir ein Projekt aus.",
    },
    {
        title: "Schritt 4 Ueberschrift",
        subtitle: "4. Schritt",
        description: "Stelle das Projekt ein und lege deine Anforderungen fest. Wir bearbeiten deine Anforderungen und melden wir uns bei dir.",
    },
]

export const howItWorksSection: SectionType = {
    title: "Lade dir die Demo-Version der Mobile-App herunter",
    description: "Die Demo-Version bietet dir die Möglichkeit, die App ganz bequem auf deinem mobilen Gerät zu testen und zwar egal ob auf Android oder iOS. Folge den Schritten unten.",
}