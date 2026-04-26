import React, { useMemo, useState } from "react";
import {
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type ThemeKey = "gold" | "blue" | "green";

const THEMES = {
  gold: { accent: "#D8B63F", soft: "rgba(216,182,63,0.18)", dark: "#111111" },
  blue: { accent: "#38BDF8", soft: "rgba(56,189,248,0.18)", dark: "#071018" },
  green: { accent: "#4ADE80", soft: "rgba(74,222,128,0.18)", dark: "#07140C" },
};

export default function HomeScreen() {
  const [brand, setBrand] = useState("Atlas Demo Brand");
  const [tagline, setTagline] = useState("Premium Local Business");
  const [phone, setPhone] = useState("3463657906");
  const [theme, setTheme] = useState<ThemeKey>("gold");

  const active = THEMES[theme];

  const cleanPhone = useMemo(() => phone.replace(/\D/g, "").slice(0, 10), [phone]);

  const callNow = () => {
    if (cleanPhone.length === 10) Linking.openURL(`tel:${cleanPhone}`);
  };

  return (
    <SafeAreaView style={styles.page}>
      <StatusBar barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        {/* TOP BRAND */}
        <Text style={[styles.kicker, { color: active.accent }]}>ATLAS DIGITAL LAB</Text>

        {/* LIVE CUSTOMIZER */}
        <View style={styles.customWrap}>
          <Text style={styles.sectionTitle}>Live Demo Builder</Text>

          <TextInput
            value={brand}
            onChangeText={setBrand}
            placeholder="Business Name"
            placeholderTextColor="#777"
            style={styles.input}
          />

          <TextInput
            value={tagline}
            onChangeText={setTagline}
            placeholder="Industry / Tagline"
            placeholderTextColor="#777"
            style={styles.input}
          />

          <TextInput
            value={phone}
            onChangeText={(v) => setPhone(v.replace(/\D/g, "").slice(0, 10))}
            placeholder="Phone"
            placeholderTextColor="#777"
            keyboardType="phone-pad"
            style={styles.input}
          />

          <View style={styles.themeRow}>
            {(["gold", "blue", "green"] as ThemeKey[]).map((item) => (
              <TouchableOpacity
                key={item}
                onPress={() => setTheme(item)}
                style={[
                  styles.themeBtn,
                  { backgroundColor: theme === item ? THEMES[item].accent : "#1B1B1F" },
                ]}
              >
                <Text
                  style={[
                    styles.themeBtnText,
                    { color: theme === item ? THEMES[item].dark : "#EAEAEA" },
                  ]}
                >
                  {item.toUpperCase()}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* PHONE PREVIEW */}
        <View style={styles.shell}>
          {/* Header */}
          <View style={styles.topBar}>
            <View>
              <Text style={styles.smallText}>{tagline}</Text>
              <Text style={styles.brand}>{brand}</Text>
            </View>

            <TouchableOpacity
              onPress={callNow}
              style={[styles.callBtn, { backgroundColor: active.accent }]}
            >
              <Text style={[styles.callBtnText, { color: active.dark }]}>Call</Text>
            </TouchableOpacity>
          </View>

          {/* HERO */}
          <View style={styles.hero}>
            <View style={[styles.glow1, { backgroundColor: active.soft }]} />
            <View style={[styles.glow2, { backgroundColor: active.soft }]} />

            <Text style={[styles.heroEyebrow, { color: active.accent }]}>
              PREMIUM APP EXPERIENCE
            </Text>

            <Text style={styles.heroTitle}>
              Built to impress customers and drive repeat business.
            </Text>

            <Text style={styles.heroSub}>
              Bookings, offers, orders, support, loyalty, and stronger branding
              in one premium mobile experience.
            </Text>

            <TouchableOpacity
              onPress={callNow}
              style={[styles.heroCta, { backgroundColor: active.accent }]}
            >
              <Text style={[styles.heroCtaText, { color: active.dark }]}>
                Launch This App
              </Text>
            </TouchableOpacity>
          </View>

          {/* QUICK ACTIONS */}
          <Text style={styles.blockTitle}>Quick Actions</Text>

          <View style={styles.grid}>
            <ActionCard title="Book Now" accent={active.accent} />
            <ActionCard title="Offers" accent={active.accent} />
            <ActionCard title="Order" accent={active.accent} />
            <ActionCard title="Support" accent={active.accent} />
          </View>

          {/* FEATURE STRIP */}
          <View style={styles.metricRow}>
            <Metric title="24/7" sub="Access" accent={active.accent} />
            <Metric title="1 Tap" sub="Contact" accent={active.accent} />
            <Metric title="VIP" sub="Brand Feel" accent={active.accent} />
          </View>

          {/* SALES BLOCK */}
          <View style={styles.luxCard}>
            <Text style={[styles.luxEyebrow, { color: active.accent }]}>
              HIGHER VALUE OFFER
            </Text>
            <Text style={styles.luxTitle}>Website + Branded App</Text>
            <Text style={styles.luxText}>
              Show clients a real mobile app concept before they buy.
              Premium positioning = bigger deals.
            </Text>
          </View>

          {/* TESTIMONIAL STYLE */}
          <View style={styles.quoteCard}>
            <Text style={styles.quote}>
              “This would make our company look way bigger.”
            </Text>
            <Text style={styles.quoteName}>— Future Client</Text>
          </View>

          {/* BOTTOM NAV MOCK */}
          <View style={styles.bottomNav}>
            <NavItem label="Home" active accent={active.accent} />
            <NavItem label="Book" accent={active.accent} />
            <NavItem label="Offers" accent={active.accent} />
            <NavItem label="Account" accent={active.accent} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function ActionCard({
  title,
  accent,
}: {
  title: string;
  accent: string;
}) {
  return (
    <View style={styles.actionCard}>
      <View style={[styles.iconDot, { backgroundColor: accent }]} />
      <Text style={styles.actionText}>{title}</Text>
    </View>
  );
}

function Metric({
  title,
  sub,
  accent,
}: {
  title: string;
  sub: string;
  accent: string;
}) {
  return (
    <View style={styles.metric}>
      <Text style={[styles.metricNum, { color: accent }]}>{title}</Text>
      <Text style={styles.metricSub}>{sub}</Text>
    </View>
  );
}

function NavItem({
  label,
  active,
  accent,
}: {
  label: string;
  active?: boolean;
  accent: string;
}) {
  return (
    <View style={styles.navItem}>
      <View
        style={[
          styles.navDot,
          { backgroundColor: active ? accent : "#2A2A2E" },
        ]}
      />
      <Text style={[styles.navText, active && { color: accent }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#050507",
  },

  scroll: {
    padding: 18,
    paddingBottom: 60,
  },

  kicker: {
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 5,
    marginTop: 10,
    marginBottom: 16,
  },

  customWrap: {
    backgroundColor: "#121216",
    borderRadius: 28,
    padding: 18,
    marginBottom: 18,
  },

  sectionTitle: {
    color: "#F5EFE6",
    fontSize: 26,
    fontWeight: "900",
    marginBottom: 14,
  },

  input: {
    backgroundColor: "#1E1E22",
    color: "#F5EFE6",
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 15,
    fontSize: 17,
    marginBottom: 12,
  },

  themeRow: {
    flexDirection: "row",
    gap: 8,
    marginTop: 4,
  },

  themeBtn: {
    flex: 1,
    borderRadius: 999,
    paddingVertical: 13,
    alignItems: "center",
  },

  themeBtnText: {
    fontSize: 12,
    fontWeight: "900",
  },

  shell: {
    backgroundColor: "#0B0E14",
    borderRadius: 34,
    overflow: "hidden",
  },

  topBar: {
    backgroundColor: "#151922",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  smallText: {
    color: "rgba(245,239,230,0.5)",
    fontSize: 11,
    letterSpacing: 3,
    marginBottom: 8,
    textTransform: "uppercase",
  },

  brand: {
    color: "#F5EFE6",
    fontSize: 24,
    fontWeight: "900",
  },

  callBtn: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 999,
  },

  callBtnText: {
    fontSize: 14,
    fontWeight: "900",
  },

  hero: {
    padding: 22,
    position: "relative",
    overflow: "hidden",
  },

  glow1: {
    position: "absolute",
    width: 180,
    height: 180,
    borderRadius: 999,
    right: -60,
    top: -40,
  },

  glow2: {
    position: "absolute",
    width: 140,
    height: 140,
    borderRadius: 999,
    left: -50,
    bottom: -50,
  },

  heroEyebrow: {
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 4,
    marginBottom: 16,
  },

  heroTitle: {
    color: "#F5EFE6",
    fontSize: 38,
    fontWeight: "900",
    lineHeight: 40,
    letterSpacing: -1.8,
  },

  heroSub: {
    color: "rgba(245,239,230,0.62)",
    fontSize: 17,
    lineHeight: 28,
    marginTop: 18,
    marginBottom: 20,
  },

  heroCta: {
    borderRadius: 999,
    paddingVertical: 18,
    alignItems: "center",
  },

  heroCtaText: {
    fontSize: 16,
    fontWeight: "900",
  },

  blockTitle: {
    color: "#F5EFE6",
    fontSize: 24,
    fontWeight: "900",
    paddingHorizontal: 22,
    marginTop: 8,
    marginBottom: 14,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    paddingHorizontal: 22,
  },

  actionCard: {
    width: "47%",
    backgroundColor: "#171B23",
    borderRadius: 22,
    padding: 18,
  },

  iconDot: {
    width: 28,
    height: 28,
    borderRadius: 999,
    marginBottom: 12,
  },

  actionText: {
    color: "#F5EFE6",
    fontSize: 16,
    fontWeight: "900",
  },

  metricRow: {
    flexDirection: "row",
    gap: 10,
    padding: 22,
  },

  metric: {
    flex: 1,
    backgroundColor: "#171B23",
    borderRadius: 22,
    paddingVertical: 16,
    alignItems: "center",
  },

  metricNum: {
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 4,
  },

  metricSub: {
    color: "rgba(245,239,230,0.6)",
    fontSize: 11,
    fontWeight: "700",
  },

  luxCard: {
    marginHorizontal: 22,
    backgroundColor: "#171B23",
    borderRadius: 26,
    padding: 22,
    marginBottom: 14,
  },

  luxEyebrow: {
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 4,
    marginBottom: 12,
  },

  luxTitle: {
    color: "#F5EFE6",
    fontSize: 28,
    fontWeight: "900",
    marginBottom: 12,
  },

  luxText: {
    color: "rgba(245,239,230,0.62)",
    fontSize: 17,
    lineHeight: 28,
  },

  quoteCard: {
    marginHorizontal: 22,
    backgroundColor: "#12151C",
    borderRadius: 26,
    padding: 22,
    marginBottom: 18,
  },

  quote: {
    color: "#F5EFE6",
    fontSize: 22,
    lineHeight: 30,
    fontWeight: "800",
  },

  quoteName: {
    color: "rgba(245,239,230,0.52)",
    marginTop: 12,
    fontSize: 14,
  },

  bottomNav: {
    borderTopWidth: 1,
    borderTopColor: "#1D222B",
    paddingVertical: 14,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  navItem: {
    alignItems: "center",
  },

  navDot: {
    width: 20,
    height: 20,
    borderRadius: 999,
    marginBottom: 6,
  },

  navText: {
    color: "#A8A8A8",
    fontSize: 11,
    fontWeight: "700",
  },
});