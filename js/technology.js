/**
 * ASTRA Space Travel - Spacecraft Technology JavaScript
 * Student 3: Miras Zhumazhan
 * Meets Criterion 3: Interactive tabs switcher for spacecraft blueprints,
 * dynamic specification updates.
 * Meets Criterion 4: jQuery Technical Spec Modal with fadeIn/fadeOut.
 */

const SPACECRAFT_SYSTEMS = {
    "orion-x": {
        name: "ORION-X Exploration Vehicle",
        tagline: "Heavy Interplanetary Crew Capsule & Observation Lounge",
        svg: "images/orion-x.svg",
        thrust: "450 kN Dual-Mode Methane/LOX",
        isp: "385 seconds",
        capacity: "6 Civilian Astronauts + 2 Crew",
        shielding: "Multi-layered water wall & magnetic deflectors",
        description: "The flagship carrier for lunar and near-Earth voyages. Features artificial micro-gravity rotation hubs, panoramic glass cupolas, and emergency escape launch thrusters capable of 12G abort maneuvers."
    },
    "lifecore": {
        name: "LIFECORE Environmental Loop",
        tagline: "Closed-Loop Oxygen, Water & Biomass Regeneration",
        svg: "images/lifecore.svg",
        thrust: "N/A (Autonomous Life Support Subsystem)",
        isp: "99.4% Recycled Water Efficiency",
        capacity: "Supports 8 Humans continuously for 3 Years",
        shielding: "Pressurized Kevlar & Aerogel thermal blankets",
        description: "Bioregenerative life support utilizing spirulina algae photobioreactors and catalytic sabatier reactors. Produces medical-grade potable water and breathable O2 from recycled passenger respiration."
    },
    "navigate-ai": {
        name: "NAVIGATE-AI Guidance Array",
        tagline: "Quantum Stellar Triangulation & Micro-Meteoroid Evasion",
        svg: "images/navigate-ai.svg",
        thrust: "Cold-gas attitude RCS thruster grid",
        isp: "Nanosecond laser sensor resolution",
        capacity: "Autonomous interplanetary trajectory calculation",
        shielding: "Hardened Gallium-Nitride optical computing core",
        description: "Calculates gravitational slingshot burns around Venus, Earth, and Jupiter. Scans 100,000 km ahead using pulsed LIDAR to detect debris and adjusts ship orientation in milliseconds."
    },
    "astra-shield": {
        name: "ASTRA Magneto-Hydrodynamic Shield",
        tagline: "Deep Space Cosmic Ray & Coronal Mass Ejection Protection",
        svg: "images/astra-shield.svg",
        thrust: "High-temperature superconducting coil array",
        isp: "Generates 4.2 Tesla magnetic bubble",
        capacity: "Shields entire vehicle payload perimeter",
        shielding: "Magnetic field deflects 99.8% ionizing protons",
        description: "Creates an artificial mini-magnetosphere around the spacecraft during interplanetary transit, shielding civilian passengers from solar energetic particles and deep-space galactic cosmic radiation."
    }
};

$(document).ready(function () {
    // 1. Interactive Tabs Switching
    $(".tech-tab-btn").on("click", function () {
        $(".tech-tab-btn").removeClass("active");
        $(this).addClass("active");

        const systemKey = $(this).attr("data-system");
        switchSpacecraftSystem(systemKey);
    });

    // 2. jQuery Modal: Inspect Detailed Blueprint
    $("#inspectBlueprintBtn").on("click", function (e) {
        e.preventDefault();
        const currentSystemKey = $(".tech-tab-btn.active").attr("data-system") || "orion-x";
        const system = SPACECRAFT_SYSTEMS[currentSystemKey];

        $("#blueprintModalTitle").text(system.name);
        $("#blueprintModalTagline").text(system.tagline);
        $("#blueprintModalSvg").attr("src", system.svg).attr("alt", system.name);
        $("#blueprintModalDesc").text(system.description);

        // jQuery fadeIn with .stop(true, true)
        $("#blueprintModal").css("display", "flex").hide().stop(true, true).fadeIn(250);
    });

    $("#closeBlueprintModalBtn, #blueprintModal").on("click", function (e) {
        if (e.target === this || $(e.target).hasClass("modal-close-btn")) {
            $("#blueprintModal").stop(true, true).fadeOut(200);
        }
    });

    $(document).on("keydown", function (e) {
        if (e.key === "Escape") {
            $("#blueprintModal").stop(true, true).fadeOut(200);
        }
    });
});

/**
 * Updates DOM specification view dynamically
 */
function switchSpacecraftSystem(key) {
    const sys = SPACECRAFT_SYSTEMS[key];
    if (!sys) return;

    $("#systemTitle").text(sys.name);
    $("#systemTagline").text(sys.tagline);
    $("#systemSvg").attr("src", sys.svg).attr("alt", sys.name);
    $("#systemDescription").text(sys.description);

    $("#specThrust").text(sys.thrust);
    $("#specIsp").text(sys.isp);
    $("#specCapacity").text(sys.capacity);
    $("#specShielding").text(sys.shielding);
}
