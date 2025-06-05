--- src/gnome-internet-radio-locator.c.orig	2021-01-22 18:27:33 UTC
+++ src/gnome-internet-radio-locator.c
@@ -199,7 +199,7 @@ mouse_click_cb (ClutterActor *actor, ClutterButtonEven
 	const char *name, *name_city, *name_country;
 	/* GeocodeForward *fwd; */
 	/* GList *list; */
-	/* GError **err; */
+	GError *err = NULL;
 	lon = champlain_view_x_to_longitude (view, event->x);
 	lat = champlain_view_y_to_latitude (view, event->y);
 	/* champlain_view_center_on (CHAMPLAIN_VIEW (view), lat, lon); */
@@ -207,13 +207,19 @@ mouse_click_cb (ClutterActor *actor, ClutterButtonEven
 	location_country = geocode_location_new (lat, lon, GEOCODE_LOCATION_ACCURACY_COUNTRY);
 	reverse_city = geocode_reverse_new_for_location (location_city);
 	reverse_country = geocode_reverse_new_for_location (location_country);
-	place_city = geocode_reverse_resolve (reverse_city, error);
-	place_country = geocode_reverse_resolve (reverse_country, error);
+	g_object_unref(location_city);
+	g_object_unref(location_country);
+	place_city = geocode_reverse_resolve (reverse_city, &err);
+	if (err) return TRUE;
+	place_country = geocode_reverse_resolve (reverse_country, &err);
+	if (err) return TRUE;
 	name_city = geocode_place_get_town (place_city);
+	g_object_unref(place_city);
 	name_country = geocode_place_get_country (place_country);
 	if (!g_strcmp0(name_country, "United States of America")) {
 		name_country = geocode_place_get_state (place_country);
 	}
+	g_object_unref(place_country);
 	marker = champlain_label_new_from_file ("icons/emblem-generic.png", NULL);
 	name = g_strconcat(name_city, ", ", name_country, NULL);
 	champlain_label_set_text (CHAMPLAIN_LABEL (marker), (gchar *)name);
