(ns app.helpers
  (:require
    [clojure.string :as str]
    [ajax.core :refer [GET POST]]
    [reagent.core :as r :refer [atom]]
    ["antd" :refer [Typography.Text Card Space Row Col Divider]]))

(def state (atom {:brand-colors nil
                  :typography ["lead", "normal", "bold", "heavy", "italic", "underline", "strike", "uppercase", "downcase", "capitalize", "align-center", "align-right", "align-left"]
                  :display ["flex", "inline-flex", "block", "inline", "inline-block"]
                  :sizing ["sm", "md", "lg", "xl", "0", "5", "8", "10", "15", "16", "20", "24", "26", "30", "40", "50"]}))

(defn handler [response]
  (.log js/console (str response))
  (swap! state assoc :brand-colors response))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "Error: " status " " status-text)))

(def all-records (GET "/colors.json" {:handler handler
                                      :error-handler error-handler
                                      :response-format :json
                                      :keywords? true}))

(defn color-helpers
  [{:keys [color-collections variables]}]
  [:div.c-HelpersComponent_colors
   (for [collection color-collections]
     (let [{:keys [title prefix]} collection]
      [:div.margin-bottom-lg {:id (str "#" title)}
       [:a {:href (str "#" title)}
        [:h4 (str title " color CSS classes")]]
       [:> Row {:gutter 16}
        (for [color variables]
          (let [{:keys [name value compiledValue]} color]
            [:> Col {:key name :span 6}
             [:> Space
              [:div {:style {:background compiledValue :height 20 :width 20}}]
              [:> Typography.Text {:code true :copyable true}
                (str prefix (subs name 1))]]]))]]))])

(defn typography-helpers
  [{:keys [typography]}]
  [:div.c-HelpersComponent_typography
   [:h4 "Typography CSS classes"]
   [:> Row {:gutter 16}
    (for [typo typography]
      [:> Col {:key typo :span 6}
       [:> Space
        [:> Typography.Text {:code true :copyable true}
          (str ".text-" typo)]]])]])

(defn display-helpers
  [{:keys [display]}]
  [:div.c-HelpersComponent_typography
   [:h4 "Display / Layout CSS classes"]
   [:> Row {:gutter 16}
    (for [d display]
      [:> Col {:key d :span 6}
       [:> Space
        [:> Typography.Text {:code true :copyable true}
          (str ".display-" d)]]])]])

(defn sizing-helpers
  [{:keys [sizing]}]
  [:div.c-HelpersComponent_typography
   [:h4 "Sizing CSS classes"]
   [:> Row {:gutter 16}
    (for [size sizing]
      [:> Col {:key size :span 6}
       [:> Space
        [:> Typography.Text {:code true :copyable true}
          (str ".[padding, margin]-" size)]]])]])

(defn HelpersComponent
  []
  (let [{:keys [brand-colors typography sizing display]} @state
        {:keys [primary secondary variables]} brand-colors
        color-collections [{:title "Background" :prefix ".bg-"}
                           {:title "Text" :prefix ".text-"}
                           {:title "Border" :prefix ".bdr-"}
                           {:title "Fill" :prefix ".fill-"}]]
   [:div.c-HelpersComponent
    [typography-helpers {:typography typography}]
    [:> Divider]
    [display-helpers {:display display}]
    [:> Divider]
    [sizing-helpers {:sizing sizing}]
    [:> Divider]
    [color-helpers
     {:color-collections color-collections
      :variables variables}]]))
